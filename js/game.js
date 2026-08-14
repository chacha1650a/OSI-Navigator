/* =========================================================
   OSI Navigator — game.js
   js/data.json을 읽어 학습 경로(#learning-path)의 노드 상태
   (완료 / 진행중 / 잠김)와 상단 스탯 바를 렌더링합니다.

   주의: index.html을 file:// 로 직접 열면 브라우저 보안 정책상
   fetch()로 로컬 JSON을 못 읽는 경우가 있습니다(Chrome 등).
   이 경우 아래 FALLBACK_DATA로 동작합니다. 정확한 데이터로
   확인하려면 프로젝트 루트에서 간단한 로컬 서버를 띄워주세요.
   예: python -m http.server 8000
   ========================================================= */

const FALLBACK_DATA = {
  layers: [
    { id: 1, name: "Physical", nameKo: "물리 계층", pdu: "Bit", icon: "i-plug" },
    { id: 2, name: "Data Link", nameKo: "데이터링크 계층", pdu: "Frame", icon: "i-link" },
    { id: 3, name: "Network", nameKo: "네트워크 계층", pdu: "Packet", icon: "i-globe" },
    { id: 4, name: "Transport", nameKo: "전송 계층", pdu: "Segment", icon: "i-package" },
    { id: 5, name: "Session", nameKo: "세션 계층", pdu: "Data", icon: "i-chat" },
    { id: 6, name: "Presentation", nameKo: "표현 계층", pdu: "Data", icon: "i-frame" },
    { id: 7, name: "Application", nameKo: "애플리케이션 계층", pdu: "Data", icon: "i-browser" }
  ],
  progress: { completedLayers: [], streakDays: 0, xp: 0 }
};

async function loadData() {
  try {
    const res = await fetch("js/data.json", { cache: "no-store" });
    if (!res.ok) throw new Error("data.json 응답 오류: " + res.status);
    return await res.json();
  } catch (err) {
    console.warn("[OSI Navigator] data.json을 불러오지 못해 기본값으로 대체합니다.", err);
    return FALLBACK_DATA;
  }
}

function computeState(layerId, completedLayers) {
  if (completedLayers.includes(layerId)) return "done";
  const nextLayer = completedLayers.length ? Math.max(...completedLayers) + 1 : 1;
  if (layerId === nextLayer) return "current";
  return "locked";
}

function renderBadge(state) {
  if (state === "done") {
    return `<span class="badge badge-good"><svg class="icon icon-xs"><use href="#i-check"/></svg></span>`;
  }
  if (state === "locked") {
    return `<span class="badge badge-locked"><svg class="icon icon-xs"><use href="#i-lock"/></svg></span>`;
  }
  return "";
}

function renderPath(data) {
  const { completedLayers } = data.progress;

  data.layers.forEach((layer) => {
    const node = document.querySelector(`.path-node-wrap[data-layer="${layer.id}"]`);
    if (!node) return;

    const state = computeState(layer.id, completedLayers);
    node.dataset.state = state;

    const circle = node.querySelector(".node-circle");
    // 배지(체크/자물쇠)가 이미 있으면 지우고 다시 그림
    const oldBadge = circle.querySelector(".badge");
    if (oldBadge) oldBadge.remove();
    circle.insertAdjacentHTML("beforeend", renderBadge(state));
  });
}

function renderStats(progress) {
  const streakEl = document.querySelector('[data-stat="streak"]');
  const xpEl = document.querySelector('[data-stat="xp"]');
  if (streakEl) streakEl.textContent = `${progress.streakDays}일`;
  if (xpEl) xpEl.textContent = `${progress.xp.toLocaleString()}XP`;
}

(async function init() {
  const data = await loadData();
  renderPath(data);
  renderStats(data.progress);
})();

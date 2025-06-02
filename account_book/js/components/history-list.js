import { renderCurrentAsset } from '../components/current-asset.js';
import { store, removeHistory } from '../store.js';

const $sectionHistory = document.querySelector('.history');

export function initHistoryList() {
  renderHistoryList();
  addHistoryListEventListener();
}

function addHistoryListEventListener() {
  $sectionHistory.addEventListener('click', function (event) {
    const element = event.target;
    if (!element.className.includes('delete-button')) return;

    const { dateid, itemid } = element.dataset;

    const isSuccess = removeHistory(dateid, itemid);
    if (!isSuccess) {
      alert('소비내역 삭제에 실패했습니다.');
      return;
    }

    reRender();
  });
}

function reRender() {
  renderCurrentAsset();
  renderHistoryList();
}

export function renderHistoryList() {
  // 날짜별 그룹
  $sectionHistory.innerHTML = store.dateList
    .sort((a, b) => new Date(a.id) - new Date(b.id))
    .map(({ date, id: dateId }) => {
      const detail = store.detailList[dateId];
      if (!Array.isArray(detail) || detail.length === 0) return '';

      // 소비내역 리스트 렌더링
      const itemsHtml = detail
        .sort((a, b) => new Date(b.createAt) - new Date(a.createAt))
        .map(item => {
          const time = new Date(item.createAt).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          });

          return `
      <section class="history-item">
        <section class="history-item-column">
          <div class="create-at">${time}</div>
          <div class="history-detail">
            <div class="history-detail-row history-detail-title">
              <p>${item.description}</p>
            </div>
            <div class="history-detail-row history-detail-subtitle">
              <p>${item.category}</p>
              <p>${item.amount.toLocaleString()} <span>원</span></p>
            </div>
          </div>
          <div class="delete-section">
            <button class="delete-button" data-dateid="${dateId}" data-itemid="${
            item.id
          }">🗑</button>
          </div>
        </section>
        <section class="history-item-caption">
          <p>
            <span>남은 자산</span>
            <span>${item.fundsAtTheTime.toLocaleString()}</span>
            <span>원</span>
          </p>
        </section>
      </section>
    `;
        })
        .join('');

      return `
        <article class="history-per-day">
          <p class="history-date">${date}</p>
          ${itemsHtml}
        </article>
      `;
    })
    .join('');
}

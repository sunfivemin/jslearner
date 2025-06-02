/**
 * dateList {
    date: new Date("2000-01-10").toLocaleDateString(),
    id: "2",
  }[]
 * detailList {
    2: {
       id: Date.now() + 1000,
       createAt: new Date(),
       description: "삼겹살",
       category: "식사",
       amount: 20000,
       fundsAtTheTime: 9978000,
     }[]
  }
 */
export const store = {
  currentFunds: 0,
  isFirstEdit: true,
  todayId: new Date().toISOString().slice(0, 10),
  dateList: [],
  detailList: {},
};

export function updateStorage() {
  sessionStorage.setItem('store', JSON.stringify(store));
}

export function initStore() {
  let storage = sessionStorage.getItem('store');

  // 저장된 값이 없으면 초기화하고 다시 불러오기
  if (!storage) {
    updateStorage();
    storage = sessionStorage.getItem('store'); // ⬅️ 꼭 다시 가져와야 함
  }

  try {
    const parsed = JSON.parse(storage);
    if (!parsed || typeof parsed !== 'object') throw new Error('Invalid store');

    const { dateList, detailList, todayId, currentFunds, isFirstEdit } = parsed;

    store.currentFunds = currentFunds;
    store.isFirstEdit = isFirstEdit;
    store.dateList = dateList;
    store.detailList = detailList;
    store.todayId = todayId;
  } catch (e) {
    console.error('스토어 파싱 실패:', e);
    updateStorage(); // 복구 불가 시 초기화
  }
}

export function addNewHistory(newHistory) {
  try {
    const todayId = new Date().toISOString().slice(0, 10);

    // dateList에 오늘 날짜 없으면 추가
    if (!store.dateList.some(d => d.id === todayId)) {
      store.dateList.push({
        id: todayId,
        date: new Date().toLocaleDateString(),
      });
    }

    // detailList에 오늘 날짜 없으면 초기화
    if (!Array.isArray(store.detailList[todayId])) {
      store.detailList[todayId] = [];
    }

    store.detailList[todayId].push(newHistory);

    // 현재 자산 업데이트
    store.currentFunds = newHistory.fundsAtTheTime;

    updateStorage();
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
}

export function removeHistory(dateId, itemId) {
  try {
    const list = store.detailList[dateId];
    if (!Array.isArray(list)) return false;

    const target = list.find(item => item.id === Number(itemId));
    if (!target) return false;

    // 삭제된 아이템 금액만큼 자산 복구
    store.currentFunds += target.amount;

    // 실제 삭제 수행
    store.detailList[dateId] = list.filter(item => item.id !== Number(itemId));

    updateStorage();
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
}

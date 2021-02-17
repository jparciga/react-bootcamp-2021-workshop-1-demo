export const getVisibleItems = (items, filter) =>
  items.filter(({ points }) => {
    if (filter === "not-on-podium" && points < 200) {
      return true;
    } else if (filter === "on-podium" && points > 200) {
      return true;
    } else if (!filter || filter === "none") {
      return true;
    }

    return false;
  });

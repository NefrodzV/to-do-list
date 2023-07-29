import { compareAsc } from "date-fns"

export default function Sorter() {
  const sortByDate = (items) => {
    items.sort((firstItem, secondItem) => {
      // Will compare the dates and see if its the init message for date if so move it last
      if (
        firstItem.getDate() === "No date set" &&
        secondItem !== "No date set"
      ) {
        S
        return 1
      }
      return compareAsc(
        new Date(firstItem.getDate()),
        new Date(secondItem.getDate())
      )
    })
  }

  return {
    sortByDate,
  }
}

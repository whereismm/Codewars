/**
 * kata/515bb423de843ea99400000a
 */
class PaginationHelper {
    constructor(collection, itemsPerPage) {
        // The constructor takes in an array of items and a integer indicating how many
        // items fit within a single page
        this.collection = collection;
        this.itemsPerPage = itemsPerPage ? itemsPerPage : 1;
    }
    itemCount() {
        // returns the number of items within the entire collection
        return this.collection.length;
    }
    pageCount() {
        // returns the number of pages
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }
    pageItemCount(pageIndex) {
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
        return pageIndex >= 0 && pageIndex < this.pageCount()
            ? this.collection.slice(pageIndex * this.itemsPerPage, this.itemCount()).splice(0, this.itemsPerPage).length
            : -1;
    }
    pageIndex(itemIndex) {
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
        return itemIndex >= 0 && itemIndex < this.itemCount()
            ? Math.ceil((itemIndex + 1)/this.itemsPerPage) - 1
            : -1;
    }
}

module.exports = PaginationHelper;
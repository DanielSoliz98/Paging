using Pagination.Paging;

namespace Pagination.ViewModel
{
    public class PageListViewModel
    {
        public IPageList Data { get; set; }
        public int PageCount { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
        public int TotalCount { get; set; }
    }
}

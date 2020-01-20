namespace Pagination.Paging
{
    public interface IPageList
    {
        int TotalCount { get; }
        int PageCount { get; }
        int Page { get; }
        int PageSize { get; }
    }
}

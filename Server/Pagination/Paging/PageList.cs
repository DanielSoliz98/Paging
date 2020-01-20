using System.Collections.Generic;
using System.Linq;

namespace Pagination.Paging
{
    public class PageList<T> : List<T>, IPageList
    {
        public int TotalCount { get; private set; }
        public int PageCount { get; private set; }
        public int Page { get; private set; }
        public int PageSize { get; private set; }

        public PageList(IQueryable<T> source, int page, int pageSize)
        {
            TotalCount = source.Count();
            PageCount = GetPageCount(pageSize, TotalCount);
            Page = page < 1 ? 0 : page;
            PageSize = pageSize;
            AddRange(source.Skip((Page - 1) * PageSize).Take(PageSize).ToList());
        }

        private int GetPageCount(int pageSize, int totalCount)
        {
            if (pageSize == 0)
            {
                return 0;
            }

            var remainder = totalCount % pageSize;
            return (totalCount / pageSize) + (remainder == 0 ? 0 : 1);
        }
    }

    public static class PageListExtensions
    {
        public static PageList<T> ToPageList<T>(this IQueryable<T> source, int pageNumber,
        int pageSize)
        {
            return new PageList<T>(source, pageNumber, pageSize);
        }
    }
}

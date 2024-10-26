namespace StudentHelper.Application.Common.Models;

public class PaginatedList<T>(IReadOnlyCollection<T> items, Int32 count, Int32 pageNumber, Int32 pageSize) {
    public IReadOnlyCollection<T> Items { get; } = items;
    public Int32 PageNumber => pageNumber;
    public Int32 TotalPages { get; } = (Int32)Math.Ceiling(count / (Double)pageSize);
    public Int32 TotalCount => count;

    public Boolean HasPreviousPage => PageNumber > 1;

    public Boolean HasNextPage => PageNumber < TotalPages;

    public static async Task<PaginatedList<T>> CreateAsync(IQueryable<T> source, Int32 pageNumber, Int32 pageSize) {
        var count = await source.CountAsync();
        var items = await source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();

        return new PaginatedList<T>(items, count, pageNumber, pageSize);
    }
}

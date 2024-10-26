using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Application.Common.Mappings;
using StudentHelper.Application.Common.Models;

namespace StudentHelper.Application.TodoItems.Queries.GetTodoItemsWithPagination;

public record GetTodoItemsWithPaginationQuery : IRequest<PaginatedList<TodoItemBriefDto>> {
    public Int32 ListId { get; init; }
    public Int32 PageNumber { get; init; } = 1;
    public Int32 PageSize { get; init; } = 10;
}

public class GetTodoItemsWithPaginationQueryHandler(IApplicationDbContext context, IMapper mapper) : IRequestHandler<GetTodoItemsWithPaginationQuery, PaginatedList<TodoItemBriefDto>> {
    public async Task<PaginatedList<TodoItemBriefDto>> Handle(GetTodoItemsWithPaginationQuery request, CancellationToken cancellationToken) {
        return null!;
        // return await context.TodoItems
        //     .Where(x => x.ListId == request.ListId)
        //     .OrderBy(x => x.Title)
        //     .ProjectTo<TodoItemBriefDto>(mapper.ConfigurationProvider)
        //     .PaginatedListAsync(request.PageNumber, request.PageSize);
    }
}

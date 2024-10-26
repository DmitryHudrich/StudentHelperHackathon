using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.TodoItems.Queries.GetTodoItemsWithPagination;

public class TodoItemBriefDto {
    public Int32 Id { get; init; }

    public Int32 ListId { get; init; }

    public String? Title { get; init; }

    public Boolean Done { get; init; }

    private class Mapping : Profile {
        public Mapping() {
            CreateMap<TodoItem, TodoItemBriefDto>();
        }
    }
}

using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Events;

namespace StudentHelper.Application.TodoItems.Commands.DeleteTodoItem;

public record DeleteTodoItemCommand(Int32 Id) : IRequest;

public class DeleteTodoItemCommandHandler(IApplicationDbContext context) : IRequestHandler<DeleteTodoItemCommand> {
    public async Task Handle(DeleteTodoItemCommand request, CancellationToken cancellationToken) {
        // var entity = await context.TodoItems
        //     .FindAsync([request.Id], cancellationToken);
        //
        // Guard.Against.NotFound(request.Id, entity);
        //
        // context.TodoItems.Remove(entity);

        // entity.AddDomainEvent(new TodoItemDeletedEvent(entity));

        await context.SaveChangesAsync(cancellationToken);
    }
}

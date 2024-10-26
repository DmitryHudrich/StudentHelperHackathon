using StudentHelper.Domain.Events;
using Microsoft.Extensions.Logging;

namespace StudentHelper.Application.TodoItems.EventHandlers;

public class TodoItemCreatedEventHandler(ILogger<TodoItemCreatedEventHandler> logger) : INotificationHandler<TodoItemCreatedEvent> {
    public Task Handle(TodoItemCreatedEvent notification, CancellationToken cancellationToken) {
        logger.LogInformation("StudentHelper.Domain Event: {DomainEvent}", notification.GetType().Name);

        return Task.CompletedTask;
    }
}

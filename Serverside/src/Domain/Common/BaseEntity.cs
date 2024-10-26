using System.ComponentModel.DataAnnotations.Schema;

namespace StudentHelper.Domain.Common;

public abstract class BaseEntity {
    // This can easily be modified to be BaseEntity<T> and public T Id to support different key types.
    // Using non-generic integer types for simplicity
    public Int32 Id { get; set; }

    private readonly List<BaseEvent> domainEvents = [];

    [NotMapped]
    public IReadOnlyCollection<BaseEvent> DomainEvents => domainEvents.AsReadOnly();

    public void AddDomainEvent(BaseEvent domainEvent) {
        domainEvents.Add(domainEvent);
    }

    public void RemoveDomainEvent(BaseEvent domainEvent) {
        domainEvents.Remove(domainEvent);
    }

    public void ClearDomainEvents() {
        domainEvents.Clear();
    }
}

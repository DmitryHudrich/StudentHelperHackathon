namespace StudentHelper.Domain.Common;

// Learn more: https://docs.microsoft.com/en-us/dotnet/standard/microservices-architecture/microservice-ddd-cqrs-patterns/implement-value-objects
public abstract class ValueObject {
    protected static Boolean EqualOperator(ValueObject left, ValueObject right)
        => !(left is null ^ right is null) && left?.Equals(right!) != false;

    protected static Boolean NotEqualOperator(ValueObject left, ValueObject right) {
        return !EqualOperator(left, right);
    }

    protected abstract IEnumerable<Object> GetEqualityComponents();

    public override Boolean Equals(Object? obj) {
        if (obj == null || obj.GetType() != GetType()) {
            return false;
        }

        var other = (ValueObject)obj;
        return GetEqualityComponents().SequenceEqual(other.GetEqualityComponents());
    }

    public override Int32 GetHashCode() {
        var hash = new HashCode();

        foreach (var component in GetEqualityComponents()) {
            hash.Add(component);
        }

        return hash.ToHashCode();
    }
}

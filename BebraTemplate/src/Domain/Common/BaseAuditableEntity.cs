namespace StudentHelper.Domain.Common;

public abstract class BaseAuditableEntity : BaseEntity {
    public DateTimeOffset Created { get; set; }

    public String? CreatedBy { get; set; }

    public DateTimeOffset LastModified { get; set; }

    public String? LastModifiedBy { get; set; }
}

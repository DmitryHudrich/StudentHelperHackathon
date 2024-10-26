using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.Common.Interfaces;

public interface IApplicationDbContext {
    DbSet<StudentHelper.Domain.Entities.Branch> Branches { get; set; }
    DbSet<TopicContact> Contacts { get; set; }
    DbSet<Topic> Topics { get; set; }
    DbSet<University> Universities { get; set; }

    Task<Int32> SaveChangesAsync(CancellationToken cancellationToken = default);
    Int32 SaveChanges();
}


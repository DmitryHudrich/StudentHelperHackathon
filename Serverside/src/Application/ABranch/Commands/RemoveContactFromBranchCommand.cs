using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.Branch.Commands;

public class RemoveContactFromBranchCommand : IRequest<BranchContact?> {
    public required Int32 BranchId { get; set; }
    public required String Name { get; set; }
}

public class RemoveContactFromBranchCommandHandler(IApplicationDbContext context) : IRequestHandler<RemoveContactFromBranchCommand, BranchContact?> {
    public async Task<BranchContact?> Handle(RemoveContactFromBranchCommand request, CancellationToken cancellationToken) {
        var branch = await context.Branches.FirstOrDefaultAsync(b => b.Id == request.BranchId);
        var contact = branch?.Contacts.FirstOrDefault(c => c.Name == request.Name);
        if (contact == null || branch == null) {
            return null;
        }
        branch.Contacts.Remove(contact);
        await context.SaveChangesAsync(cancellationToken);
        return contact;
    }
}

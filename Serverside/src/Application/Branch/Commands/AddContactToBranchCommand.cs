using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.Branch.Commands;

public class AddContactToBranchCommand : IRequest<Contact?> {
    public required Int32 BranchId { get; set; }
    public required String Name { get; set; }
    public required String Content { get; set; }
}

public class AddContactToBranchCommandHandler(IApplicationDbContext context) : IRequestHandler<AddContactToBranchCommand, Contact?> {
    public async Task<Contact?> Handle(AddContactToBranchCommand request, CancellationToken cancellationToken) {
        var contact = new Contact() {
            Name = request.Name,
            Content = request.Content,
        };
        var branch = await context.Branches.FirstOrDefaultAsync(b => b.Id == request.BranchId);
        branch?.Contacts.Add(contact);
        await context.SaveChangesAsync(cancellationToken);
        return contact;
    }
}


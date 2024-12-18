﻿using StudentHelper.Application.AUniversities.Commands;
using StudentHelper.Application.Common.Interfaces;

namespace StudentHelper.Application.ABranch.Commands;

public class RemoveContactFromBranchCommand : IRequest<Contact?> {
    public required Int32 BranchId { get; set; }
    public required String Name { get; set; }
}

public class RemoveContactFromBranchCommandHandler(IApplicationDbContext context) : IRequestHandler<RemoveContactFromBranchCommand, Contact?> {
    public async Task<Contact?> Handle(RemoveContactFromBranchCommand request, CancellationToken cancellationToken) {
        var branch = await context.Branches.FirstOrDefaultAsync(b => b.Id == request.BranchId);
        var contact = branch?.Contacts.FirstOrDefault(c => c.Name == request.Name);
        if (contact == null || branch == null) {
            return null;
        }
        branch.Contacts.Remove(contact);
        await context.SaveChangesAsync(cancellationToken);
        return new Contact(contact.Id, contact.Name, contact.Content);
    }
}

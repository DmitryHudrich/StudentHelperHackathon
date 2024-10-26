using StudentHelper.Application.Universities.Commands;
using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.Universities.Commands;

public class CreateUniversityCommand : IRequest<Boolean> {
    public required String Name { get; set; }
    public required String MainAddress { get; set; }
    public required String ContactName { get; set; }
    public required String Information { get; set; }
    public required String Image { get; set; }
}

public class CreateUniversityCommandHandler(IApplicationDbContext context) : IRequestHandler<CreateUniversityCommand, bool> {
    public async Task<Boolean> Handle(CreateUniversityCommand request, CancellationToken cancellationToken) {
        var university = new University() {
            Name = request.Name,
            MainAddress = request.MainAddress,
            ContactName = request.ContactName,
            Information = request.Information,
            Image = request.Image
        };
        await context.Universities.AddAsync(university, cancellationToken);
        await context.SaveChangesAsync(cancellationToken);
        return true;
    }
}

public class UpdateUniversityCommandHandler(IApplicationDbContext context) : IRequestHandler<UpdateUniversityCommand, bool> {
    public async Task<bool> Handle(UpdateUniversityCommand request, CancellationToken cancellationToken) {
        var university = await context.Universities.FirstOrDefaultAsync(u => u.Id == request.Id, cancellationToken);
        if (university == null) return false;

        university.Name = request.Name;
        university.MainAddress = request.MainAddress;
        university.ContactName = request.ContactName;
        university.Information = request.Information;
        university.Image = request.Image;

        await context.SaveChangesAsync(cancellationToken);
        return true;
    }
}

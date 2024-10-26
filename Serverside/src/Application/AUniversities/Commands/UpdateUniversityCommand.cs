using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.AUniversities.Commands;

public class UpdateUniversityCommand : IRequest<Boolean> {
    public Int32 Id { get; set; }
    public required String Name { get; set; }
    public required String MainAddress { get; set; }
    public required List<UniversityContact> Contacts { get; set; } = [];
    public required String Information { get; set; }
    public required String Image { get; set; }
}

public class UpdateUniversityCommandHandler(IApplicationDbContext context) : IRequestHandler<UpdateUniversityCommand, bool> {
    public async Task<bool> Handle(UpdateUniversityCommand request, CancellationToken cancellationToken) {
        var university = await context.Universities.FirstOrDefaultAsync(u => u.Id == request.Id, cancellationToken);
        if (university == null) {
            return false;
        }
        university.Name = request.Name;
        university.MainAddress = request.MainAddress;
        university.Contacts = request.Contacts;
        university.Information = request.Information;
        university.Image = request.Image;

        await context.SaveChangesAsync(cancellationToken);
        return true;
    }
}


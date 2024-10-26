namespace StudentHelper.Domain.Entities; 

public class University {
    public Int32 Id { get; set; }
    public required String Name { get; set; }
    public required String Address { get; set; }
    public required String Information { get; set; }
    public required String Image { get; set; }
    public List<UniversityContact> Contacts { get; set; } = [];
}

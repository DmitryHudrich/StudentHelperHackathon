namespace StudentHelper.Domain.Entities;

public class Topic {
    public Int32 Id { get; set; }
    public required String Title { get; set; }
    public required String Image { get; set; }
    public required String Content { get; set; }
    public required Branch Branch { get; set; }
    public required Int32 UserId { get; set; }
    public List<TopicContact> Contacts { get; set; } = [];
}

// using StudentHelper.Domain.Entities;
// using Microsoft.EntityFrameworkCore;
// using Microsoft.EntityFrameworkCore.Metadata.Builders;
//
// namespace StudentHelper.Infrastructure.Data.Configurations;
//
// public class TodoListConfiguration : IEntityTypeConfiguration<TodoList> {
//     public void Configure(EntityTypeBuilder<TodoList> builder) {
//         builder.Property(static t => t.Title)
//             .HasMaxLength(200)
//             .IsRequired();
//
//         builder
//             .OwnsOne(static b => b.Colour);
//     }
// }

using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace BebraTemplate.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class SexxxoMegratassss : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Themes");

            migrationBuilder.DropTable(
                name: "Userss");

            migrationBuilder.DropColumn(
                name: "ContactName",
                table: "Branches");

            migrationBuilder.DropColumn(
                name: "UniversityName",
                table: "Branches");

            migrationBuilder.AddColumn<int>(
                name: "BranchId",
                table: "Contacts",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TopicId",
                table: "Contacts",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UniversityId",
                table: "Branches",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Topics",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Title = table.Column<string>(type: "text", nullable: false),
                    Image = table.Column<string>(type: "text", nullable: false),
                    Content = table.Column<string>(type: "text", nullable: false),
                    BranchId = table.Column<int>(type: "integer", nullable: false),
                    UserId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Topics", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Topics_Branches_BranchId",
                        column: x => x.BranchId,
                        principalTable: "Branches",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_BranchId",
                table: "Contacts",
                column: "BranchId");

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_TopicId",
                table: "Contacts",
                column: "TopicId");

            migrationBuilder.CreateIndex(
                name: "IX_Branches_UniversityId",
                table: "Branches",
                column: "UniversityId");

            migrationBuilder.CreateIndex(
                name: "IX_Topics_BranchId",
                table: "Topics",
                column: "BranchId");

            migrationBuilder.AddForeignKey(
                name: "FK_Branches_Universities_UniversityId",
                table: "Branches",
                column: "UniversityId",
                principalTable: "Universities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Contacts_Branches_BranchId",
                table: "Contacts",
                column: "BranchId",
                principalTable: "Branches",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Contacts_Topics_TopicId",
                table: "Contacts",
                column: "TopicId",
                principalTable: "Topics",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Branches_Universities_UniversityId",
                table: "Branches");

            migrationBuilder.DropForeignKey(
                name: "FK_Contacts_Branches_BranchId",
                table: "Contacts");

            migrationBuilder.DropForeignKey(
                name: "FK_Contacts_Topics_TopicId",
                table: "Contacts");

            migrationBuilder.DropTable(
                name: "Topics");

            migrationBuilder.DropIndex(
                name: "IX_Contacts_BranchId",
                table: "Contacts");

            migrationBuilder.DropIndex(
                name: "IX_Contacts_TopicId",
                table: "Contacts");

            migrationBuilder.DropIndex(
                name: "IX_Branches_UniversityId",
                table: "Branches");

            migrationBuilder.DropColumn(
                name: "BranchId",
                table: "Contacts");

            migrationBuilder.DropColumn(
                name: "TopicId",
                table: "Contacts");

            migrationBuilder.DropColumn(
                name: "UniversityId",
                table: "Branches");

            migrationBuilder.AddColumn<string>(
                name: "ContactName",
                table: "Branches",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "UniversityName",
                table: "Branches",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "Themes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    AuthorLogin = table.Column<int>(type: "integer", nullable: false),
                    BranchName = table.Column<string>(type: "text", nullable: false),
                    ContactName = table.Column<string>(type: "text", nullable: false),
                    ContentId = table.Column<int>(type: "integer", nullable: false),
                    Image = table.Column<string>(type: "text", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Themes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Userss",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Age = table.Column<int>(type: "integer", nullable: false),
                    FullName = table.Column<string>(type: "text", nullable: false),
                    Gender = table.Column<string>(type: "text", nullable: false),
                    Login = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false),
                    UniversityName = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Userss", x => x.Id);
                });
        }
    }
}

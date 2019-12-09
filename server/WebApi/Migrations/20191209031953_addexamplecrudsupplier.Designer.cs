﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApi.Helpers;

namespace WebApi.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20191209031953_addexamplecrudsupplier")]
    partial class addexamplecrudsupplier
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.2-servicing-10034")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebApi.Entities.Menu", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(36);

                    b.Property<string>("Action")
                        .IsRequired()
                        .HasMaxLength(128);

                    b.Property<int>("Index");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(36);

                    b.Property<string>("ParentId")
                        .HasMaxLength(36);

                    b.HasKey("Id");

                    b.HasIndex("ParentId");

                    b.ToTable("Menu");
                });

            modelBuilder.Entity("WebApi.Entities.Role", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(36);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(36);

                    b.HasKey("Id");

                    b.ToTable("Role");
                });

            modelBuilder.Entity("WebApi.Entities.RoleDetail", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(36);

                    b.Property<string>("MenuId")
                        .IsRequired()
                        .HasMaxLength(36);

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasMaxLength(36);

                    b.HasKey("Id");

                    b.HasIndex("MenuId");

                    b.HasIndex("RoleId");

                    b.ToTable("RoleDetail");
                });

            modelBuilder.Entity("WebApi.Entities.Subscription", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(36);

                    b.Property<int>("Limit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(36);

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasMaxLength(36);

                    b.Property<string>("SubscriptionTypeId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.HasIndex("SubscriptionTypeId");

                    b.ToTable("Subscription");
                });

            modelBuilder.Entity("WebApi.Entities.SubscriptionType", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(36);

                    b.Property<int>("MonthInterval");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(36);

                    b.HasKey("Id");

                    b.ToTable("SubscriptionType");
                });

            modelBuilder.Entity("WebApi.Entities.Supplier", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(36);

                    b.Property<string>("Address")
                        .HasMaxLength(360);

                    b.Property<string>("Name")
                        .HasMaxLength(36);

                    b.Property<string>("Phone")
                        .HasMaxLength(36);

                    b.Property<string>("UserId")
                        .HasMaxLength(36);

                    b.HasKey("Id");

                    b.ToTable("Supplier");
                });

            modelBuilder.Entity("WebApi.Entities.User", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(36);

                    b.Property<string>("FirstName")
                        .HasMaxLength(36);

                    b.Property<string>("LastName")
                        .HasMaxLength(36);

                    b.Property<string>("ParrentId")
                        .HasMaxLength(36);

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("SubscriptionId")
                        .HasMaxLength(36);

                    b.Property<string>("UserName")
                        .HasMaxLength(36);

                    b.HasKey("Id");

                    b.HasIndex("SubscriptionId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("WebApi.Entities.Menu", b =>
                {
                    b.HasOne("WebApi.Entities.Menu", "Parent")
                        .WithMany()
                        .HasForeignKey("ParentId");
                });

            modelBuilder.Entity("WebApi.Entities.RoleDetail", b =>
                {
                    b.HasOne("WebApi.Entities.Menu", "Menu")
                        .WithMany()
                        .HasForeignKey("MenuId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebApi.Entities.Role", "Role")
                        .WithMany("Details")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WebApi.Entities.Subscription", b =>
                {
                    b.HasOne("WebApi.Entities.Role", "Role")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebApi.Entities.SubscriptionType", "SubscriptionType")
                        .WithMany()
                        .HasForeignKey("SubscriptionTypeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WebApi.Entities.User", b =>
                {
                    b.HasOne("WebApi.Entities.Subscription", "Subscription")
                        .WithMany()
                        .HasForeignKey("SubscriptionId");
                });
#pragma warning restore 612, 618
        }
    }
}

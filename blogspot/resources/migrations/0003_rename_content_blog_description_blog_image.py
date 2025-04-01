# Generated by Django 5.1.7 on 2025-03-20 09:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resources', '0002_blog_comment'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blog',
            old_name='content',
            new_name='description',
        ),
        migrations.AddField(
            model_name='blog',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='post_image/'),
        ),
    ]

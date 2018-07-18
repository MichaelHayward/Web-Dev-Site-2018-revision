# Generated by Django 2.0.6 on 2018-07-10 15:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailimages', '0020_add-verbose-name'),
        ('blog', '0002_blogpost_intro'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='representative_image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
    ]

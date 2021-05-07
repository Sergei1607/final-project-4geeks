"""empty message

Revision ID: b7418a3341ea
Revises: 
Create Date: 2021-05-05 14:56:38.305058

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b7418a3341ea'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('adopt',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('full_name', sa.String(length=250), nullable=False),
    sa.Column('address', sa.String(length=250), nullable=False),
    sa.Column('telephone', sa.String(length=250), nullable=True),
    sa.Column('mobile_phone', sa.String(length=250), nullable=False),
    sa.Column('email', sa.String(length=250), nullable=False),
    sa.Column('name_pet', sa.String(length=250), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('pet',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=250), nullable=False),
    sa.Column('type_pet', sa.String(length=250), nullable=False),
    sa.Column('sex', sa.String(length=250), nullable=False),
    sa.Column('age', sa.String(length=250), nullable=False),
    sa.Column('history', sa.String(length=250), nullable=False),
    sa.Column('behaviour', sa.String(length=250), nullable=False),
    sa.Column('breed', sa.String(length=250), nullable=False),
    sa.Column('size', sa.String(length=250), nullable=False),
    sa.Column('other', sa.String(length=250), nullable=False),
    sa.Column('image', sa.String(length=250), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('last_name', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('user_adm', sa.String(length=80), nullable=True),
    sa.Column('answer', sa.String(length=80), nullable=False),
    sa.Column('question', sa.String(length=250), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('password'),
    sa.UniqueConstraint('username')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    op.drop_table('pet')
    op.drop_table('adopt')
    # ### end Alembic commands ###
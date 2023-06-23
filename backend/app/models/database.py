from sqlalchemy.orm import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# engine=create_engine("postgresql://{YOUR_DATABASE_USER}:{YOUR_DATABASE_PASSWORD}@localhost/{YOUR_DATABASE_NAME}",
#     echo=True
# )

# engine = create_engine("mysql://li:one@ld_data/learnducate", echo=True, pool_recycle=3600)
engine = create_engine(
    "mysql://li:one@ld_data/learnducate", echo=True, pool_pre_ping=True
)

Base = declarative_base()

SessionLocal = sessionmaker(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        print("DB YIELDING............")
        yield db
    finally:
        print("DB CLOSING............")
        db.close()

from pydantic import BaseModel, field_validator


class UserLogin(BaseModel):
    username: str
    password: str

    @field_validator("*")
    def strip_whitespace(cls, v):
        if isinstance(v, str):
            return v.strip()
        return v

class UserRegistration(BaseModel):
    username: str
    password: str
    first_name: str
    last_name: str

    @field_validator("*")
    def strip_whitespace(cls, v):
        if isinstance(v, str):
            return v.strip()
        return v
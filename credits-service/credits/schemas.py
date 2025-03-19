from pydantic import BaseModel, field_validator


MAX_CREDITS=500
MIN_CREDITS=1

class NewCredits(BaseModel):
    newCredits: int

    @field_validator("newCredits")
    def strip_whitespace(cls, v):
        if v < MIN_CREDITS:
            raise ValueError(f"Credits bought must be greater than or equal to {MIN_CREDITS}")
        elif v > MAX_CREDITS:
            raise ValueError(f"Credits bought must be less than or equal to {MAX_CREDITS}")
        return v
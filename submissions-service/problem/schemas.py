from pydantic import BaseModel
from typing import List, Union
from .models import SubmissionStatusEnum

class MetadataItem(BaseModel):
    title: str
    description: str
    type: str
    value: Union[str, int]
    order_num: int

class CreateSubmissionRequest(BaseModel):
    name: str
    metadata: List[MetadataItem]


class RunSubmissionRequest(BaseModel):
    submission_id: int

class ResultPayload(BaseModel):
    submission_id: int
    status: SubmissionStatusEnum
    results: str
    execution_time: float
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_add_and_fetch():
    res = client.post("/add", params={"name": "TestUser"})
    assert res.status_code == 200

    res2 = client.get("/fetch")
    assert res2.status_code == 200
    assert any(name["name"] == "TestUser" for name in res2.json())

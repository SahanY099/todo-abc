import { API } from "@utils";

class TodoService {
  async getAll({ status }) {
    const res = await API.get("", {
      params: {
        status,
      },
    });
    return res.data;
  }

  async create(data) {
    const res = await API.post("", { ...data });
    return res.data;
  }

  async complete(id) {
    const res = await API.post("complete/", { id });
    return res.data;
  }

  async delete(id) {
    const res = await API.delete(`${id}/`);
    return res.data;
  }

  async update(id, data) {
    const res = await API.patch(`${id}/`, { ...data });
    return res.data;
  }

  async leftCount() {
    const res = await API.get("left_count/");
    return res.data;
  }

  async clearCompleted() {
    const res = await API.post(`clear_completed/`);
    return res.data;
  }
}
export default new TodoService();

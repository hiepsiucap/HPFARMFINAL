/** @format */

import { useState } from "react";
import { Modal, Box, Button, TextField } from "@mui/material";

type Event = {
  name: string;
  location: string;
  time: string;
  timeout: string;
  minimal: number;
  current: number;
  maximum: number;
  status: string;
  img: string;
};

interface UpdateEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
  onUpdate: (event: Event) => void;
}

const UpdateEventModal: React.FC<UpdateEventModalProps> = ({
  isOpen,
  onClose,
  event,
  onUpdate,
}) => {
  const [updatedEvent, setUpdatedEvent] = useState<Event | null>(event);

  const handleChange = (field: keyof Event, value: string | number) => {
    setUpdatedEvent((prevEvent) =>
      prevEvent ? { ...prevEvent, [field]: value } : null
    );
  };

  const handleSubmit = () => {
    if (updatedEvent) {
      onUpdate(updatedEvent);
      onClose();
    }
  };

  if (!event) {
    return null;
  }

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>Cập nhật thông tin sự kiện</h2>
        <TextField
          label="Tên sự kiện"
          value={updatedEvent?.name || ""}
          onChange={(e) => handleChange("name", e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Địa điểm"
          value={updatedEvent?.location || ""}
          onChange={(e) => handleChange("location", e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Thời gian"
          value={updatedEvent?.time || ""}
          onChange={(e) => handleChange("time", e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Ngày kết thúc đơn"
          value={updatedEvent?.timeout || ""}
          onChange={(e) => handleChange("timeout", e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Số người tối thiểu"
          type="number"
          value={updatedEvent?.minimal || 0}
          onChange={(e) =>
            handleChange("minimal", parseInt(e.target.value, 10))
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Số người hiện tại"
          type="number"
          value={updatedEvent?.current || 0}
          onChange={(e) =>
            handleChange("current", parseInt(e.target.value, 10))
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Số người tối đa"
          type="number"
          value={updatedEvent?.maximum || 0}
          onChange={(e) =>
            handleChange("maximum", parseInt(e.target.value, 10))
          }
          fullWidth
          margin="normal"
        />
        <TextField
          label="Trạng thái"
          value={updatedEvent?.status || ""}
          onChange={(e) => handleChange("status", e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Link ảnh"
          value={updatedEvent?.img || ""}
          onChange={(e) => handleChange("img", e.target.value)}
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Lưu thay đổi
        </Button>
      </Box>
    </Modal>
  );
};

export default UpdateEventModal;

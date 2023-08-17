import mitt from "mitt";

export const EventBus = mitt<{ [idx: string]: any }>();

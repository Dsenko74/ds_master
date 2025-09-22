// src/config/menuConfig.js
// цей файл формує навігаційне меню.
//релізавано функцію додавання емодзі
export const menuItems = [
  { key: "сети", label: "Сети" },
  { key: "роли", label: "Роли" },
  { key: "акції", label: "Акції", icon: "🔥" },
  { key: "комбо", label: "Комбо" },
  { key: "новинки", label: "Новинки", icon: "⭐️" },
  { key: "суші бургери", label: "Суші бургери" },
  { key: "суші", label: "Суші" },
  { key: "гаряче та салати", label: "Гаряче та салати" },
  { key: "десерти та напої", label: "Десерти та напої" },
  { key: "доповнення", label: "Доповнення" },
  { key: "філадельфії", label: "Філадельфії" },
  { key: "каліфорніі", label: "Каліфорніі" },
];

export const getDisplayName = (key) => {
  const found = menuItems.find((item) => item.key === key);
  return found ? `${found.icon ? found.icon + " " : ""}${found.label}` : key;
};

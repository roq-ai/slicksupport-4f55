const mapping: Record<string, string> = {
  companies: 'company',
  users: 'user',
  works: 'work',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

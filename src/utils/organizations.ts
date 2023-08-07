

export const getUniqueOrganizations = (data:Response[]) => {
    const uniqueOrganizationsSet = new Set<string>();
    let uniqueOrganizations: string[] = []
    data?.forEach((item: any) => {
        uniqueOrganizationsSet?.add(item.organization);
    });

    uniqueOrganizationsSet?.forEach((item) => {
        uniqueOrganizations?.push(item)
    })


    return uniqueOrganizations



}
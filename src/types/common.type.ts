export interface IPaging {
  page?: number;
  limit?: number;
}

export interface IListPaging<T extends unknown = any[]> {
  pagination: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  result: T[];
}

export interface IAxiosResponse<T extends unknown> {
  data: T;
  meta: {
    pagination: {
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
  };
}

export interface IFolder {
  folderName: string;
  size?: number;
  files: IFile[];
}

export interface IFile extends File {
  preview?: string;
}

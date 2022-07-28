import Query from '@arcgis/core/rest/support/Query';
import { executeQueryJSON } from '@arcgis/core/rest/query';
import { useAsync } from './useAsync';

export const useQueryAllFeatures = (
  url: string,
  queryOptions?: __esri.QueryProperties
) => {
  const queryAllPlantFeatures = async (
    query: __esri.Query,
    allFeatures: any[] = []
  ): Promise<any[]> => {
    const result = await executeQueryJSON(url, query);
    allFeatures = allFeatures.concat(result.toJSON().features);

    if (result.exceededTransferLimit) {
      query.start += result.features.length;
      return await queryAllPlantFeatures(query, allFeatures);
    } else {
      return allFeatures;
    }
  };

  const query = new Query(
    queryOptions ?? {
      num: 30000, // setting max record count just for this example
      where: '1=1',
      outFields: ['*'],
      returnGeometry: false,
      start: 0,
    }
  );

  return useAsync(() => queryAllPlantFeatures(query));
};

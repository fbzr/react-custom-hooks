import { useFetch } from '../hooks/useFetch';
import { useQueryAllFeatures } from '../hooks/useQueryAllFeatures';
import { usePagination } from './Pagination/usePagination';

const ListAllFeatures = () => {
  const FEATURE_LAYER_URL =
    'https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/MODIS_Thermal_v1/FeatureServer/1';

  const { data, loading, error } = useQueryAllFeatures(FEATURE_LAYER_URL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Fatal Error!</p>;

  return (
    <div>
      <h1>List all features</h1>

      {data &&
        Array.isArray(data) &&
        (data.length
          ? data.map(({ attributes }) => (
              <li key={attributes.OBJECTID}>{attributes.OBJECTID}</li>
            ))
          : 'no data')}
    </div>
  );
};

export default ListAllFeatures;

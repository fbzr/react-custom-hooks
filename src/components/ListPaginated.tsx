import { useQueryAllFeatures } from '../hooks/useQueryAllFeatures';
import { usePagination } from './Pagination/usePagination';

const ListAllFeatures = () => {
  const FEATURE_LAYER_URL =
    'https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/MODIS_Thermal_v1/FeatureServer/1';

  const { data, loading, error } = useQueryAllFeatures(FEATURE_LAYER_URL);
  const [currentItems, Pagination] = usePagination(data ?? []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Fatal Error!</p>;

  return (
    <div>
      <h1>List paginated</h1>

      {currentItems && (
        <ul>
          {currentItems.map((item, index) => (
            <li key={[item.attributes.OBJECTID, index].join('-')}>
              {item.attributes.OBJECTID}
            </li>
          ))}
        </ul>
      )}

      {Pagination}
    </div>
  );
};

export default ListAllFeatures;

import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { PDBLoader } from 'three/examples/jsm/loaders/PDBLoader';
import { useLoader } from '@react-three/fiber';

export default function Experience() {
  const model = useLoader(PDBLoader, './ethanol.pdb');
  const geometryAtoms = model.geometryAtoms;
  const geometryBonds = model.geometryBonds;
  const json = model.json;
    console.log(json);
    console.log(geometryAtoms);
    console.log(geometryBonds);
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <points>
        <bufferGeometry {...geometryAtoms} />
        <pointsMaterial size={5} vertexColors={true} />
      </points>

      {/* <lineSegments>
        <bufferGeometry {...geometryBonds} />
        <lineBasicMaterial color={0xffffff} linewidth={2} />
      </lineSegments> */}
    </>
  );
}

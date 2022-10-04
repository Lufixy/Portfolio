
import { useRouter } from "next/router";
export default function Blog({ blog }) {
    const router = useRouter();
    const { id } = router.query;
    
    return (
        <div className="container mx-auto">
            <h1 className="text-6xl font-bold">{id}</h1>
            <p className="text-2xl"></p>
        </div>
    )
}

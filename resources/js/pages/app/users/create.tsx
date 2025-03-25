import { User, columns } from '@/components/app/users/columns';
import { DataTable } from '@/components/app/users/data-table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Users',
        href: '/users',
    },
    {
        title: 'Create User',
        href: '#',
    }
];

export default function Create({ users }: { users: User[] }) {
    const [data, setData] = useState<User[]>(users);

    useEffect(() => {
        setData(users);
    }, [users]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create User" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container mx-auto py-10">
                    {/* Form Create User */}
                </div>
            </div>
        </AppLayout>
    );
}

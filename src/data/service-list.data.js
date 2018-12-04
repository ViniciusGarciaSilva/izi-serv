import { Service } from './../model/service';

export function getServiceList() {
    const serviceListMock = [
        new Service(
            'Service 1',
            'Description description description description description description description description description ' +
            'description description description description description description description description description' +
            'description description description description description description description description description',
            'theme 1',
            'integrador 1',
            'project 1',
            'status 1',
        ),
        new Service(
            'Service 2',
            'Description description description description description description description description description ' +
            'description description description description description description description description description' +
            'description description description description description description description description description',
            'theme 2',
            'integrador 2',
            'project 2',
            'status 2',
        ),
        new Service(
            'Service 3',
            'Description description description description description description description description description ' +
            'description description description description description description description description description' +
            'description description description description description description description description description',
            'theme 3',
            'integrador 3',
            'project 3',
            'status 3',
        ),
        new Service(
            'Service 4',
            'Description description description description description description description description description ' +
            'description description description description description description description description description' +
            'description description description description description description description description description',
            'theme 4',
            'integrador 4',
            'project 4',
            'status 4',
        ),
        new Service(
            'Service 5',
            'Description description description description description description description description description ' +
            'description description description description description description description description description' +
            'description description description description description description description description description',
            'theme 5',
            'integrador 5',
            'project 5',
            'status 5',
        ),
        new Service(
            'Service 6',
            'Description description description description description description description description description ' +
            'description description description description description description description description description' +
            'description description description description description description description description description',
            'theme 6',
            'integrador 6',
            'project 6',
            'status 6',
        ),
    ];

    return serviceListMock;
}

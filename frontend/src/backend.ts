import {BackendProvider} from 'lincd-server-utils/lib/utils/BackendProvider';
import {ShapeSet} from "lincd/lib/collections/ShapeSet";
import {House} from "./shapes/House";
import {Shape} from "lincd/lib/shapes/Shape";
import path from "path";

export class CodeChallengeBackendProvider extends BackendProvider {
    constructor(server) {
        super(server);
    }

    async importData() {

        let mapping = null;
        let importResult = await this.convertCSVToShapes(path.join('data','other-houses.csv'), House, mapping);
        return importResult;
    }

    async convertCSVToShapes(csvPath, shapeClass:typeof Shape,csvFieldsToShapeFieldsMapping):Promise<ShapeSet> {
        let result = new ShapeSet();

        //TODO: import data from csvPath
        // use an existing library to parse the contents of the CSV file
        // then map the data to House shape instances
        // try to make this method reusable such a way that it could be reused in other places for other types of CSV's and other types of shapes
        // in order to do this, importData will need to send a mapping between the CSV fields and the shape fields,
        // and this method uses that mapping to create the shapes and set their properties.
        // it is up to you how want to make this mapping
        // Note: you can use new shapeClass() to create a new instance of the shapeClass, which in this example is House


        return result;
    }
}
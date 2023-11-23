import React from 'react';
import { Link } from 'react-router-dom';

const TableOfContents: React.FC = () => {
  return (<div className='toc'><table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Business Analysis</th>
                <th>Content</th>
                <th>UX</th>
                <th>Engineer</th>
                <th>QA</th>
                <th>DevOps</th>
                <th>Architecture</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td><Link to="/product-manager">Product Manager</Link></td>
            <td><Link to="/senior-business-analyst">Technical PM</Link></td>
            <td><Link to="/principal-learning-content-creator">Principal Learning Content Creator</Link></td>
            <td></td>
            <td><Link to="/principal-software-engineer">Principal Software Engineer</Link></td>
            <td><div><Link to="/qa-specialist">QA Manager</Link></div>
            <div><Link to="/qa-specialist">QA Specialist</Link></div></td>
            <td></td>
            <td><Link to="/architect">Architect</Link></td>
        </tr>
        <tr>
            <td><Link to="/associate-product-manager">Associate Product Manager</Link></td>
            <td><Link to="/business-analyst">Product Owner/BA</Link></td>
            <td><Link to="/senior-learning-content-creator">Senior Learning Content Creator</Link></td>
            <td><Link to="/senior-ux-designer">Senior UX Designer</Link></td>
            <td><Link to="/senior-software-engineer">Senior Software Engineer</Link></td>
            <td><Link to="/senior-qa-engineer">Senior QA Engineer</Link></td>
            <td><Link to="/senior-devops-engineer">Senior DevOps Engineer</Link></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td><Link to="/learning-content-creator">Learning Content Creator</Link></td>
            <td><Link to="/ux-designer">UX Designer</Link></td>
            <td><Link to="/software-engineer">Software Engineer</Link></td>
            <td><Link to="/qa-engineer">QA Engineer</Link></td>
            <td><Link to="/devops-engineer">DevOps Engineer</Link></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><Link to="/associate-business-analyst">Associate Business Analyst</Link></td>
            <td><Link to="/junior-learning-content-creator">Junior Learning Content Creator</Link></td>
            <td><Link to="/associate-ux-designer">Associate UX Designer</Link></td>
            <td><Link to="/junior-software-engineer">Junior Software Engineer</Link></td>
            <td><Link to="/junior-qa-engineer">Junior QA Engineer</Link></td>
            <td></td>
            <td></td>
        </tr>
        </tbody>
    </table>
    </div>
  );
};

export default TableOfContents;
